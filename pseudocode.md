# CREATE IMAGE GALLERY

## ABOUT:
- Create an image gallery that will display all of the provided images as a set of thumbnails.
<br>
- When a thumbnail is clicked it will display the large version of the image above the set of thumbnails.
<br>
- Create a button that will be displayed on the large image that will allow the user to darken the image and then lighten the image back to the original lighter image. 

## INIT: Create variables, Define variables and List variable properties.
1. **LARGE IMAGE BOX:**
    * array of images in the full size
    * the full version of the image is displayed here when thumbnail is clicked
    * would like for it to display a random full image when page is pulled up  
    **PROPERTIES**  
    -arrayPics  
    -full-img  
    -randomImg
    <br>
    <br>
2. **DARKEN FEATURE:**
    * a button that darkens or lightens the image when clicked
    * uses a semi-transparent background color over top of the large image to darken it.  
    **PROPERTIES**  
    -darkLightButton  
    -overlay
    <br>
    <br>
3. **THUMBNAIL IMAGES BAR:**
    * array of images in thumbnail size
    * all thumbnails need to be the same size vertically, (20%)
    * clicking on thumbnail displays full image in Large Image Box
    * create a border to define each thumbnail visually
    **PROPERTIES**  
    -arrayPics20h  
    -thumbBar
    <br>
    <br>

## Functionality:

**IMAGE GALLERY**  

    FUNCTION thumb-bar
        * displays full-img
        * displays darkLightButton

    FUNCTION click darkLightButton
        * displays overlay over full-img
        * removes overlay

## START: Start program

    largeImgBox
    randomImg
    darkLightButton
    thumbBar

## END: End program  