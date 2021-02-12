import { InstituteModule } from './institute.module';

describe('InstituteModule', () => {
    let instituteModule: InstituteModule;

    beforeEach(() => {
        instituteModule = new InstituteModule();
    });

    it('should create an instance', () => {
        expect(instituteModule).toBeTruthy();
    });
});
