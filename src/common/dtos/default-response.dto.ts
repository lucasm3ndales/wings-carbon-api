

interface IErrorMessages {
    field: string;
    message: string;
}

export class DefaultResponseDto<T> {
    success: boolean;
    message: string;
    data?: T;
    errors?: IErrorMessages[];

    constructor(success: boolean, message: string, data?: T, errors?: IErrorMessages[]) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.errors = errors;
    }
}

