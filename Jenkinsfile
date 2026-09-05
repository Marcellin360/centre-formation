pipeline {
    agent any

    tools {
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
                
                bat 'if not exist "C:\\deployed-app" mkdir "C:\\deployed-app"'
                bat 'xcopy /E /I /Y "backend" "C:\\deployed-app\\backend"'
                bat 'xcopy /E /I /Y "frontend\\dist" "C:\\deployed-app\\frontend-web"'
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