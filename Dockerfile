FROM python:3.11-slim

# Install Node.js
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy and install Python dependencies
COPY server/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy frontend files
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build frontend
RUN npm run build

# Expose port
EXPOSE 5000

# Start the app
CMD ["python", "server/app.py"]
