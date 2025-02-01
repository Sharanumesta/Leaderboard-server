# 🚀 Leaderboard API (Backend)

## 🌟 Overview
The **Leaderboard API** is a Node.js backend that manages users, awards random points, and tracks ranking updates in real time. Users can be added dynamically, and each point claim is recorded in history.

## ✨Features
- ✅ **User Management**: Add and retrieve users.
- ✅ **Point Claiming**: Assigns random points (1-10) when a user claims points.
- ✅ **Leaderboard Ranking**: Users are ranked dynamically based on total points.
- ✅ **Claim History**: Tracks all points awarded to users.
- ✅ **Pagination**: Supports paginated responses for user lists.

## 🛠️ **Tech Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Hosting**: Vercel

## 🔗 **API Endpoints**
### 🏆 **User Management**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/leaderboard/add-user` | Adds a new user |
| `GET` | `/api/v1/leaderboard/users?page={number}` | Retrieves users with pagination |

### 🎯 **Point Claiming & Leaderboard**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/leaderboard/award-points` | Awards random points (1-10) to a user |
| `GET` | `/api/v1/leaderboard/leaderboard?page={number}` | Retrieves leaderboard rankings |

### 📜 **Claim History**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/leaderboard/points-history/:name` | Fetches point claim history of a user |

## ⚡ **Setup & Installation**
### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/leaderboard-server.git
cd leaderboard-server
npm install
npm start
