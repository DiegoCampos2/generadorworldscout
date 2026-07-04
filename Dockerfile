FROM python:3.11

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# Set working directory
WORKDIR /app

# Copy backend requirements and install
COPY server/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy frontend and build
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Copy backend files
COPY server/ ./server/

# Expose port
EXPOSE 5000

# Start the app
CMD ["python", "server/app.py"]
