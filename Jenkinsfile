pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'node') {
                    sh 'npm config ls'
                }
            }
        }
        stage('Change directory'){
            steps{
                dir('Hexadig'){
                    nodejs(nodeJSInstallationName: 'node') {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Create archive'){
          dir('Hexadig'){
              zip(zipfile: 'build/hexadig.zip')
          }
        }
    }
}
