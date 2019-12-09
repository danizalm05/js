//Store 100 images in "rainbows100.bin"  file 
//download file:  full_numpy_bitmap_rainbow.npy from:
//console.cloud.google.com/storage/browser/quickdraw_dataset/full/numpy_bitmap

size (680,680);


int header_size = 80;
int img_size = 784;// 28x28

int total = 1000;//We are using only this number of images
byte[] data = loadBytes("full_numpy_bitmap_rainbow.npy");
println(data.length);
int num_of_images = (data.length - header_size )/img_size;
println(num_of_images);//Number of images in the file


byte[] outdata = new byte[total*784];
int  outindex = 0;
for(int n =0; n < total; n++){
    int start = header_size + n * 784;
    PImage img = createImage(28, 28, RGB);
    img.loadPixels();

    for(int i =0; i < img_size; i++){
       int index = i+ start;
       byte val = data[index];//One nymber in the range of 0 - 255
       outdata[outindex] = val;
       outindex++;
       img.pixels[i] = color(255 - val & 0xff);
     }

  img.updatePixels();
  int x = 28*(n % 10);
  int y = 28*(n/10);
  image(img,x,y);//draw the first image  
}
saveBytes("rainbows1000.bin",outdata);
