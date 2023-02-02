# CREATE IMAGE GALLERY

## ABOUT:
- Create an image gallery that will display all of the provided images as a set of thumbnails.
<br>
- When a thumbnail is clicked it will display the large version of the image above the set of thumbnails.
<br>
- A button will be displayed on the large image that will allow the user to darken the image and then lighten the image.

## INIT: Create, define and list variable properties.
1. **LARGE IMAGE BOX:**
    * the image selected is displayed here
    <br>
    ***PROPERTIES***  
    -array: images (array listing file name of each image)  
    -array: altText (object listing the alt text for each image)  
    -displayedImg (displayed selected image)  
    -.full-img (css)  
    <br>
2. **DARKEN FEATURE:**
    * button that darkens or lightens the image when clicked
    * uses a semi-transparent overlay on top of the full image to darken image
    * removes overlay to lighten image
    <br> 
    ***PROPERTIES***  
    -drkBtn (button)  
    -EventListener: changeBtn (click to place or remove overlay)  
    -.overlay (css)  
    -button (css)  
    <br>
3. **THUMBNAIL IMAGES BAR:**
    * row(s) of the images in a thumbnail size
    * all thumbnails need to be the same size vertically, (20%)
    * clicking on thumbnail displays full image in Large Image Box  
    ***PROPERTIES***  
    -thumbBar (thumbnail images)  
    -EventListener: newImage (click for a new displayedImg)  
    -thumb-bar (css)
    <br>
    <br>


## Functionality:

**IMAGE GALLERY**  

    FUNCTION: display image in Large Image Box
        * displayedImg
        * images
        * altText
        
    FUNCTION: click button
        * drkBtn
        * changeBtn
    
    FUNCTION: display thumbnail images
        * thumbBar

    FUNCTION: change displayed image when thumbnail is clicked    
        * newImage

**EXTRA**

    FUNCTION: randomly selects a displayedImg
        * randomImage

## START: Start program

    full-img
        displayedImg
        image
        altText
        overlay
        drkBtn
        changeBtn
    thumbBar
        newImage

## END: End program  