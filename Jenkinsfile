node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com/', 'dockerhubID') {

        def customImage = docker.build('mehmethypegedik/dhtests:v1')

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
