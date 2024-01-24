AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {
            default: "",
            type: "string"
        }
    },
    init: function () {
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseEnter", () => {
            this.handlePlacesListState()
        })
    },
    handlePlacesListState: function () {
        const id = this.el.getAttribute("id")
        const placesId = ["taj-mahal","budapest","eiffel-tower","new-york-city"]
        
        if (placesId.includes(id)){
            const placesContainer = document.querySelector("#places-container")
            placesContainer.setAttribute("cursor-listener",{selectedItemId:id})
            this.el.setAttribute("material",{
                color:"black"
            })
        }
    }
})