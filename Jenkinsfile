pipeline {
    agent any

    tools {
        // Mampiasa ilay NodeJS nampidirinao tao amin'ny Administrer Jenkins
        nodejs "node20"
    }

    stages {
        stage('1. Fanadihadiana Fitaovana') {
            steps {
                echo "Hamarino ny version an'ny Node sy NPM..."
                bat "node -v"
                bat "npm -v"
            }
        }

        stage('2. Fametrahana Dépendances') {
            steps {
                echo "Mametraka ny modules ilaina (Backend sy Frontend)..."
                dir('backend') {
                    bat "npm install"
                }
                dir('frontend') {
                    bat "npm install"
                }
            }
        }

        stage('3. Build ny Frontend (React)') {
            steps {
                echo "Manomana ny rakitra React (Production build)..."
                dir('frontend') {
                    bat "npm run build"
                }
            }
        }

        stage('4. Déploiement Local (Windows)') {
            steps {
                echo "Mandefa ny tetikasa ao amin'ny C:\\deployed-app..."
                
                // 1. Mamorona ny folder raha mbola tsy misy
                bat 'if not exist "C:\\deployed-app" mkdir "C:\\deployed-app"'
                
                // 2. Nadika ny Backend
                bat 'xcopy /E /I /Y "backend" "C:\\deployed-app\\backend"'
                
                // 3. Nadika ny Frontend efa vita build (folder 'dist')
                bat 'xcopy /E /I /Y "frontend\\dist" "C:\\deployed-app\\frontend-web"'

                // 4. Fikirakirana PM2 ho automatique
                dir('C:\\deployed-app\\backend') {
                    // dontKillMe dia mitazona ny PM2 ho velona na dia vita aza ny build
                    env.BUILD_ID = 'dontKillMe'
                    
                    // Mamelona na manavao ny backend-api
                    bat 'pm2 reload backend-api || pm2 start server.js --name "backend-api"'
                }
            }
        }
    }

    post {
        success {
            echo "====================================================="
            echo "PIPELINE NAHOMBAY!"
            echo "Ny tetikasanao dia efa ao amin'ny C:\\deployed-app"
            echo "====================================================="
        }
        failure {
            echo "NISY OLANA: Jereo ny Console Output hamantarana ny antony."
        }
    }
}