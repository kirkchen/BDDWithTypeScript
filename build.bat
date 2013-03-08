@echo off

echo Start Build TypeScript Files...

rem Build File List
tsc -c -sourcemap BDDWithTypeScript\Scripts\App\Service\Interface\iTodoService.ts
tsc -c -sourcemap BDDWithTypeScript\Scripts\App\Service\todoService.ts
tsc -c -sourcemap BDDWithTypeScript\Scripts\App\ViewModel\todoViewModel.ts
tsc -c -sourcemap BDDWithTypeScript\Scripts\Spec\service.spec.ts
tsc -c -sourcemap BDDWithTypeScript\Scripts\Spec\viewmodel.spec.ts

echo Build Finish!