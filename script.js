$("#agregar").click(function () {
    let texto = $("#tarea").val().trim();

    if (texto === "") return;

    $("#lista").append(
        `<li class="list-group-item ajuste">
   <span> ${texto} </span><span class="badge text-bg-danger check-btn">x</span>
    
    </li>`
    )
    $("#tarea").val("")
})

$("#lista").on("click",".check-btn", function(){
    $(this).closest("li").remove();
})