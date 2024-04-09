import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.neighbors import NearestNeighbors

# Load the dataset
data = pd.read_csv('ratings_demo.csv')


# Preprocess the data for content-based filtering
tfidf = TfidfVectorizer(stop_words='english')
data['item_description'] = data['item_description'].fillna('')
tfidf_matrix = tfidf.fit_transform(data['item_description'])

# Compute cosine similarity matrix for content-based filtering
cosine_sim_content = cosine_similarity(tfidf_matrix, tfidf_matrix)

# Fit NearestNeighbors model for item-based collaborative filtering
model_knn = NearestNeighbors(metric='cosine', algorithm='brute', n_neighbors=20)
model_knn.fit(tfidf_matrix)

# Function to get content-based recommendations
def content_based_recommendations(item_id, cosine_sim=cosine_sim_content):
    if item_id not in data['item_id'].values:
        print("Item ID not found in the dataset.")
        return []
    else:
        idx = data[data['item_id'] == item_id].index[0]
        sim_scores = list(enumerate(cosine_sim[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[1:11]  # Get the top 10 most similar items
        item_indices = [i[0] for i in sim_scores]
        return data['item_id'].iloc[item_indices]


# Function to get collaborative filtering recommendations
def collaborative_filtering_recommendations(user_id, item_id):
    idx = data[data['item_id'] == item_id].index[0]
    distances, indices = model_knn.kneighbors(tfidf_matrix[idx], n_neighbors=20)
    similar_items = [data['item_id'].iloc[ind] for ind in indices.flatten()]
    return similar_items

# Function for hybrid recommendations
def hybrid_recommendations(user_id, item_id):
    content_based_recs = content_based_recommendations(item_id)
    collaborative_filtering_recs = collaborative_filtering_recommendations(user_id, item_id)
    hybrid_recs = [item for item in content_based_recs if item in collaborative_filtering_recs]
    return hybrid_recs[:10]

# Example usage
user_id = int(input("Enter an user id"))
item_id = int(input("Enter an item number"))

recommendations = hybrid_recommendations(user_id, item_id)
content_based_recs = content_based_recommendations(item_id)
collaborative_filtering_recs = collaborative_filtering_recommendations(user_id, item_id)
print("Hybrid Recommendations for User", user_id, "and Item", item_id, ":")
print(recommendations)
print(content_based_recs)
print(collaborative_filtering_recs)
