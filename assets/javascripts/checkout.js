$(document).ready(function() {
  /* update the checkout URL if clicked on a protocol */
  $('checkout_protocols').select('a').each(function(e) {
    e.observe('click', function(event) {
      $('checkout_url').value = checkout_commands.get(this.id);
      $('checkout_protocols').select('a').each(function(e) {
        e.removeClassName("selected");
      });
      this.addClassName("selected")
      
      var access = $('checkout_access');
      if (access) {
        var value = window.checkout_access.get(this.id);
        access.innerHTML = value;
      }
      
      event.stop();
    });
  });

  if (typeof('ZeroClipboard') != 'undefined') {
    var clip = new ZeroClipboard(document.getElementById("clipboard_button"), {
      moviePath: "/plugin_assets/redmine_checkout/images/ZeroClipboard.swf"
    });
    
    clip.on('dataRequested', function(client, args) {
      client.setText($('#checkout_url').val());
    });
    
    $('#clipboard_container').show();
  }
});

