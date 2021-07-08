function load()
        {
            $.ajax({
                type: "POST",
                url: "{{ url_for('Project/app.info', _external=True) }}",
                //url: "app.info"
                success: function(result) {
                    let json = JSON.parse(result)
                    console.log(1)
                    for(let el of json){
                        $("#content").html(el.surname)
                        $("#content").html(el.name)
                        $("#content").html(el.middle_name)
                    }
                }
            })
           }

$(document).ready(function(){
     setInterval('load()',1000);
});