import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { Alert } from '$types';

const addAlert = (alert: Alert) => {
	alerts.update((alerts) => {
		return [...alerts, alert] as Alert[];
	});
};

const removeAlert = (id: string) => {
	alerts.update((alerts) => {
		return alerts.filter((a: Alert) => a.id !== id);
	});
};

export const alerts = writable([]) as Writable<Alert[]>;

export const alert = (message: string, type = 'info') => {
	const id = Math.random().toString(36).substring(2, 9);

	addAlert({ id, message, type });

	setTimeout(() => {
		removeAlert(id);
	}, 4000); // ms => should match css animation
};

export const clearAlerts = () => {
	alerts.set([]);
};

export const success = (message: string) => alert(message, 'success');
export const error = (message: string) => alert(message, 'error');
export const info = (message: string) => alert(message, 'info');
export const warning = (message: string) => alert(message, 'warning');
export const clear = () => clearAlerts();
