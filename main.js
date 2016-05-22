$(function(){
    var PRODUCT = $(".productTemplate").html();
    var SELECTED_PRODUCT = $(".selectedproductTemplate").html();
    var $text_field = $("#addLine");
    var $add_button = $("#addButton");
    var $productsList = $(".productsList");
    var $remainsList = $(".remainsList");
    var $boughtList = $(".boughtList");
    
    function addItem(name) {
        var $product = $(PRODUCT);
        var $productName = $product.find(".productName");
        var $buyProductButton = $product.find(".buyProductButton")
        var $removeProductButton = $product.find(".removeProductButton");
        var $productMinusButton = $product.find(".productMinusButton");
        var $productPlusButton = $product.find(".productPlusButton");
        var $productNumber = $product.find(".productNumber");
        var $boughtProductButton = $(".boughtProductButton");
        var $editProductName = $(".editProductName");
        
        var $selectedProduct = $(SELECTED_PRODUCT);
        var $selectedProductName = $selectedProduct.find(".selectedProductName");
        var $selectedProductNumber = $selectedProduct.find(".selectedProductNumber");
        
        
        $productName.text(name);
        $selectedProductName.text(name);
        
        $productMinusButton.attr('disabled', true);
        
        $productMinusButton.click(function(){
            var num = parseInt($productNumber.text());
            num--;
            if(num === 1) $productMinusButton.attr('disabled', true);
            $productNumber.text(num);
            $selectedProductNumber.text(num);
        });
        
        $productPlusButton.click(function(){
            var num = parseInt($productNumber.text());
            if(num === 1) $productMinusButton.removeAttr('disabled');
            num++;
            $productNumber.text(num);
            $selectedProductNumber.text(num);
        });
        
        $removeProductButton.click(function(){
            $product.remove();
            $selectedProduct.remove();
        });
        
        $buyProductButton.click(function(){
            $productName.css("text-decoration", "line-through");
            $productMinusButton.addClass("hide");
            $productPlusButton.addClass("hide");
            $productNumber.css("margin-left", "37px");
            $removeProductButton.addClass("hide");
            $buyProductButton.addClass("hide");
            $boughtProductButton.removeClass("hide");
            $selectedProduct.remove();
            $boughtList.append($selectedProduct);
        });
        
        $boughtProductButton.click(function(){
            $productName.css("text-decoration", "none");
            $productMinusButton.removeClass("hide");
            $productPlusButton.removeClass("hide");
            $productNumber.css("margin-left", "0px");
            $removeProductButton.removeClass("hide");
            $buyProductButton.removeClass("hide");
            $boughtProductButton.addClass("hide");
            $selectedProduct.remove();
            $remainsList.append($selectedProduct);
        });
        
        $productName.click(function(){
            if($productName.css("text-decoration") === "line-through"){
                
            }else{
                $productName.addClass("hide");
                $editProductName.removeClass("hide");
                $editProductName.css("width", "40%")
                $editProductName.focus();
                $editProductName.val($productName.text());
            }
        });
        
        $editProductName.focusout(function(){
            $productName.removeClass("hide");
            $editProductName.addClass("hide");
        });
        
        $editProductName.on("input", function(){
            $selectedProductName.text($editProductName.val());
            $productName.text($editProductName.val());
        });
        
        $productsList.append($product);
        $remainsList.append($selectedProduct);
    }
    
    $add_button.click(function(){
        if($text_field.val()===""){
            
        }else{
        addItem($text_field.val());
        $text_field.val("");
        $text_field.focus();
        }
    }); 
    
    
    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");
});