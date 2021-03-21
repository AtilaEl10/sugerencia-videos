class Multimedia {
    constructor(url) {
        const _url = url;
        this.getUrl = () => _url;
    }

    get url() {
        return this.getUrl()
    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        const _id = id;
        this.getId = () => _id;
    }

    get id() {
        return this.getId()
    }
    playMultimedia(){
        Media(this.url, this.id);
    }
    setInicio(tiempo){
        const idHTML = document.getElementById(this.id);
        if(!idHTML) return;
        idHTML.setAttribute("src", `${this.url}?start=${tiempo}`);
    }
}

const Media = (() => {
    const addMedia = (url, id) => {
        const idHTML = document.getElementById(id);
        if (!idHTML) return;
        idHTML.setAttribute ("src", url)
    }

    const addMediaPublic = (url, id) => addMedia(url, id)
    return addMediaPublic
})()

const musica1 = new Reproductor("https://www.youtube.com/embed/fJ9rUzIMcZQ", "musica")
musica1.playMultimedia()
const pelicula1 = new Reproductor("https://www.youtube.com/embed/Y6YBKdmOlM8", "pelicula")
pelicula1.playMultimedia()
pelicula1.setInicio(306)
const serie1 = new Reproductor("https://www.youtube.com/embed/31Voz1H40zI", "serie")
serie1.playMultimedia()