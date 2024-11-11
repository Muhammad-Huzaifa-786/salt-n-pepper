function use() {
    var table = +prompt("Enter Table")
    var tables = +prompt("Enter Table Number")

    for (var i = 1; i <= tables; i++) {
        document.write(table + " x  " + i + " = " + table * i + "<br>")
    }
}




function user() {
    document.write(`
<body style ="background-color: black">
<div style="background-color: black;color: aliceblue;border: 5px solid red;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequuntur illo aspernatur blanditiis eligendi ad numquam optio eos, ut qui ducimus cumque, velit modi maxime molestiae sequi accusantium quia! Natus?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsa? Ipsa dolorem, iusto quisquam possimus vero consectetur perferendis aut unde error id, veritatis praesentium magni. Vel consectetur voluptatibus labore qui!
Repellat aperiam atnis illum, fugiat officiis totam neque? Soluta, laboriosam? Placeat amet totam, quia, id quidem reiciendis asperiores natus consequatur illo facilis, expedita aliquid provident explicabo maxime quas labore!
Maiores eaque maxim, perferendis voluptas, voluptatum assumenda soluta quasi reprehenderit repellat corrupti sint alias ipsa quo. Praesentium consequuntur in sed ullam dolores, laborum eveniet soluta, sunt omnis explicabo quo illum?
Amet fugit sed sint quam itaque aliquid dolores, assumenda praesentium, minima cupiditate, minus cum id! Neque modi harum sint, enim laudantium tempore accusamus, dolorem architecto odit explicabo, ab incidunt quasi?
Fuga labore nemo quibusdam earum a beatae et perferendis. Facere autem officiis recusandae voluptates ad quia corrupti aliquam ut voluptas! Officia, error beatae explicabo officiis quia non vero culpa voluptatum.
Maxime, velit exercitationem adipisci veniam cupiditate voluptatem ad dolore temporibus harum. Dolorem eum tempora eaque esse expedita aperiam ratione possimus, iure animi quasi iusto optio fuga maiores maxime culpa eligendi!
Modi pariatur provident quidem fuga, nam suscipit consequatur accusamus labore et possimus perspiciatis, autem velit nisi delectus porro aliquid non voluptatum veniam eos atque similique? Voluptatem, repellat quam! Eos, error!
Atque excepturi repellendus necessitatibus veritatis, exercitationem sapiente possimus mollitia in accusamus molestiae. Sunt, unde suscipit repudiandae ut quas esse odio nihil, aperiam quisquam exercitationem quis vel reprehenderit numquam? Maxime, voluptate.
Aliquid dolorem quod explicabo eaque nesciunt saepe odio, nulla fuga distinctio ea, est optio corporis quas a consequatur recusandae praesentium aperiam culpa blanditiis atque ratione? Sunt accusantium quo assumenda possimus?
Velit nobis blanditiis omnis iusto cumque sit unde necessitatibus totam, molestias ea nesciunt repellendus at. Ullam, aperiam itaque cum saepe officia molestias natus optio deserunt corrupti non provident id illum!
</div>

<div style="display: flex;justify-content: space-around !important;border: 2px  yellow solid;padding: 2px;margin: 2px;">



<div class="card-body">
  <img src="./111.PNG" alt="">
  
    <p style="color: white;text-align: center;">very beautiful hotel</p>

  
</div>


<div class="card-body">
  <img src="./111.PNG" alt="">
  
    <p style="color: white;text-align: center;">very beautiful hotel</p>

  
</div>

<div class="card-body">
  <img src="./111.PNG" alt="">
  
    <p style="color: white;text-align: center;">very beautiful hotel</p>

  
</div>

</div>
</body>

    `)}


    
    const observer = new IntersectionObserver(intersections => {
      intersections.forEach(({
        target,
        isIntersecting
      }) => {
        target.classList.toggle('animate', isIntersecting);
      });
    }, {
      threshold: 0
    });
    
    document.querySelectorAll('.bara1').forEach(div => {
      observer.observe(div);
    });