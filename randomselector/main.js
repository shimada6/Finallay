window.onload = function () {
    $(this.document).ready(function () {
        $("input").click(function () {
            //alert("Hi");
            //$("H1").text("Hello");
            /*$("H1").text($("li:first").text());
            $("H1").text($("li:last").text());
            $("H1").text($("li").eq(1).text());*/
            let numberOFListItem = $("#sel li").length;
            let randomChildNumber = Math.floor(Math.random() * numberOFListItem);
            let pictures = [
                "https://www.likejapan.com/wp-content/uploads/2019/09/maxresdefault-1024x576.jpg",
                "https://i.imgur.com/PFHbnr8.jpg",
                "https://img.alicdn.com/imgextra/i1/21262776/T26dXZXb0cXXXXXXXX_!!21262776.jpg"
            ];
            $("#word").text($("#sel li").eq(randomChildNumber).text());
            $("#pic").attr("src", pictures[randomChildNumber]);
        });
    });
}