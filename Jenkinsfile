pipeline {
  environment {
    registry = "mehmethypegedik/dhtests"
    registryCredential = 'dockerhubID'
  }
  agent any
  stages {
    stage('Building image') {
      steps{
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}
