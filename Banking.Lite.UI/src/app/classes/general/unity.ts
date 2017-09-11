var registry = new Map<string, any>();

if (!window.icb) {
    window.icb = {
        unity: {}
    };
}

if (!registry) {
    if (!window.icb.unity.unityRegistry) {
        window.icb.unity.unityRegistry = new Map<string, any>();
    }
    registry = window.icb.unity.unityRegistry;
}

export function registerType(name: string, component: any): any {
    registry.set(name, component);
    return name;
}

export function getRegisteredType(name: string): any {
    return registry.get(name);
}