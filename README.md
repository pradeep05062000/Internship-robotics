# Internship-robotics

#TOOLS
Reactjs,css
preprocessor --> scss

#Services
Security --> Cloudflare
   
Cloud --> AWS --> Ec2
  
  
#Description
1.User has to request on (https://reactintern.thepradeepapp.xyz) link to get the my web app.

2.Then that request will be forworded to cloudflare where domain name get resolved.
Cloudflare is used to protect web app from DDOS attacks ect...

3. After resolving the domain name request is futher send to web app server.
The web application is hosted on AWS --> EC2 --> Docker.

4. When EC2 gets the request on 443/80 (forced redirect to 443 port), then nginx will proxy pass the request from 4000.
Docker container is running on 4000 port.

5.Finally we get our application and send to browser.

#Links 
Docker image
prad05/react-intern:latest

Application link
https://reactintern.thepradeepapp.xyz

#S3 bucket link for application architecture
https://react-intern-s3.s3.ap-south-1.amazonaws.com/react-intern.jpg

