aws s3 cp ./www s3://udagram-front/ --recursive  
aws s3 cp ./www/index.html s3://udagram-front/  --cache-control="max-age=0, no-cache, no-store, must-revalidate" 
