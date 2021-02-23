import { Pipe, PipeTransform } from 'arg/src/app/demos/pipes/filmes/node_modules/arg/src/app/demos/pipes/filmes/node_modules/@angular/core';

@Pipe({
    name: 'imageformater'
})
export class ImageFormaterPipe implements PipeTransform {
    transform(imagem: string, caminho: string = '', substituir: boolean) {

        if (caminho == 'default')
            caminho = 'assets';

        if (imagem.length == 0 && substituir) {
            imagem = 'semCapa.jpg'
        }

        return "/" + caminho + "/" + imagem
    }
}