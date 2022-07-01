import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
    
    transform(size: number) {

        let tamanhaCalculado = (size / (1024 * 1024))
        let extension = ' MB'

        if (tamanhaCalculado > 1024){
            tamanhaCalculado = (tamanhaCalculado / 1024);
            extension = ' GB'
        }

        return tamanhaCalculado.toFixed(2) + extension;
    }

}