var registry = new Map<string, any>();

if (!window.windowExtended) {
    window.windowExtended = {
        unity: {}
    };
}

if (!registry) {
    if (!window.windowExtended.unity.unityRegistry) {
        window.windowExtended.unity.unityRegistry = new Map<string, any>();
    }
    registry = window.windowExtended.unity.unityRegistry;
}

export function registerType(name: string, component: any): any {
    registry.set(name, component);
    return name;
}

export function getRegisteredType(name: string): any {
    return registry.get(name);
}