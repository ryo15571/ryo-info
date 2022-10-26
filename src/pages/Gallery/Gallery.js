const Gallery = () => {
    return (
<div className="grid grid-cols-2">
<section class="mx-auto w-fit p-12">
  <div className="my-28">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img class="h-72 w-96" src="./image/teaching.jpg" alt="" />
      <a href="/preteaching" class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button class="bg-black text-white py-2 px-5">ดูอัลบั้ม</button>
      </a>
    </div>
    <h2 class="mt-3 text-xl capitalize">ฝึกสอน</h2>
  </div>
  </div>
</section>
<section class="mx-auto w-fit p-12">
  <div className="my-28">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img class="h-72 w-96" src="./image/kasetsart.png" alt="" />
      <a href="/kasetsart" class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button class="bg-black text-white py-2 px-5">ดูอัลบั้ม</button>
      </a>
    </div>
    <h2 class="mt-3 text-xl capitalize">ม.เกษตร</h2>
  </div>
  </div>
</section>
</div>
)
}
export default Gallery