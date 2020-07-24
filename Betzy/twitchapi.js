//get top games
$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
        "Authorization": 'Bearer smnx8bhs44sb5ec2hzgjgnqz7xqkls',
        "Client-ID": 'qnc7c6re04qm0486sw46e4ldlkhgyj'
    },
    dataType: 'json',
    success: function(tgames) {
        var content='';
        $.each(tgames.data, function(index, element) {
            content += '<img src='+element.box_art_url.replace("{width}", "150").replace("{height}", "220")+'>';
            content += 'Rank: ' + (index+1) + '<br />';
            content += 'Name: ' + element.name + '<br />';
        });
        $('#output').html(content);
    }
})

//get top streams
$.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/helix/streams?first=10',
    headers: {
        "Authorization": 'Bearer smnx8bhs44sb5ec2hzgjgnqz7xqkls',
        "Client-ID": 'qnc7c6re04qm0486sw46e4ldlkhgyj'
    },
    dataType: 'json',
    success: function(tstreams) {
        var tstreamers ='';
        console.log(tstreams);
        $.each(tstreams.data, function(index, element) {
            tstreamers += element.user_name + '<br />';
        });
        $('#streamout').html(tstreamers);
    }
})