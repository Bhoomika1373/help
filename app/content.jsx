export default function Content() {

    return (


<div className="flex">
<div className="flex flex-wrap">
<div className="flex-none w-1/3  p-4">
<div className="bg-blue-200 h-32 rounded transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-300">Video 1</div>
<div className="text-black">Description 1</div>
</div>
<div className="flex-none w-1/3 p-4">
<div className="bg-blue-200 h-32 rounded transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-300">Video 2</div>
<div className="text-black">Description 2</div>
</div>
<div className="flex-none w-1/3 p-4">
<div className="bg-blue-200 h-32 rounded transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-300">Video 3</div>
<div className="text-black">Description 3</div>
</div>

<div className="flex-none w-1/3 p-4">
<div className="bg-blue-200 h-32 rounded transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-300">Video 4</div>
<div className="text-black">Description 4</div>
</div>
<div className="flex-none w-1/3 p-4">
<div className="bg-blue-200 h-32 rounded transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-300">Video5</div>
<div className="text-black">Description 5</div>
</div>
<div className="flex-none w-1/3 p-4">
<div className="rounded transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-300">
<iframe width="300" height="125" 
src="https://www.youtube.com/embed/bRm9nswlDrc?si=_NBDavJvrPDcQ2fW" 
title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
></iframe></div>
<div className="text-black">Description 6</div>
</div>

</div>

</div> 
    );
}