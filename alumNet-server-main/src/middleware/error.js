export function notFoundHandler(_req, res, _next) {
	res.status(404).json({ message: 'Route not found' });
}

export function errorHandler(err, _req, res, _next) {
	if (err.message === 'Not allowed by CORS') {
		return res.status(403).json({ 
			message: 'CORS policy violation',
			details: 'Origin not allowed by CORS policy'
		});
	}

	const status = err.status || 500;
	const message = err.message || 'Internal Server Error';
	const details = err.details || undefined;
	
	console.error('Error:', err);
	
	res.status(status).json({ message, details });
}
