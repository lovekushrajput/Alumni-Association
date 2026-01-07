import { useCallback } from 'react';
import { useErrorModule } from '../components/common/ErrorModule';

export const useErrorHandler = () => {
  const {
    addError,
    addNetworkError,
    addValidationError,
    addAuthError,
    addPermissionError,
    addNotFoundError,
    addServerError,
    removeError,
    clearErrors
  } = useErrorModule();

  const handleError = useCallback((error, context = {}) => {
    let errorData = {
      title: 'An error occurred',
      message: 'Something went wrong',
      severity: 'medium',
      type: 'unknown',
      ...context
    };

    
    if (error instanceof Error) {
      errorData.message = error.message;
      errorData.details = error.stack;
    } else if (typeof error === 'string') {
      errorData.message = error;
    } else if (error && typeof error === 'object') {
      errorData = { ...errorData, ...error };
    }

    addError(errorData);
  }, [addError]);

  const handleNetworkError = useCallback((error, context = {}) => {
    const message = error?.message || 'Network connection failed';
    addNetworkError(message, context);
  }, [addNetworkError]);

  const handleValidationError = useCallback((error, field = null, context = {}) => {
    const message = error?.message || 'Validation failed';
    addValidationError(message, field, context);
  }, [addValidationError]);

  const handleAuthError = useCallback((error, context = {}) => {
    const message = error?.message || 'Authentication failed';
    addAuthError(message, context);
  }, [addAuthError]);

  const handlePermissionError = useCallback((error, context = {}) => {
    const message = error?.message || 'Permission denied';
    addPermissionError(message, context);
  }, [addPermissionError]);

  const handleNotFoundError = useCallback((error, resource = null, context = {}) => {
    const message = error?.message || 'Resource not found';
    addNotFoundError(message, resource, context);
  }, [addNotFoundError]);

  const handleServerError = useCallback((error, statusCode = null, context = {}) => {
    const message = error?.message || 'Server error occurred';
    addServerError(message, statusCode, context);
  }, [addServerError]);

  const handleApiError = useCallback(async (response, context = {}) => {
    const status = response.status;
    let errorMessage = 'An error occurred';

    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (e) {
      errorMessage = response.statusText || errorMessage;
    }

    switch (true) {
      case status >= 500:
        handleServerError(new Error(errorMessage), status, context);
        break;
      case status === 404:
        handleNotFoundError(new Error(errorMessage), context.resource, context);
        break;
      case status === 401:
        handleAuthError(new Error(errorMessage), context);
        break;
      case status === 403:
        handlePermissionError(new Error(errorMessage), context);
        break;
      case status >= 400:
        handleValidationError(new Error(errorMessage), context.field, context);
        break;
      default:
        handleError(new Error(errorMessage), context);
    }
  }, [handleServerError, handleNotFoundError, handleAuthError, handlePermissionError, handleValidationError, handleError]);

  const withErrorHandling = useCallback((asyncFn, errorContext = {}) => {
    return async (...args) => {
      try {
        return await asyncFn(...args);
      } catch (error) {
        handleError(error, errorContext);
        throw error; // Re-throw to allow calling code to handle if needed
      }
    };
  }, [handleError]);

  const wrapPromise = useCallback((promise, errorContext = {}) => {
    return promise.catch(error => {
      handleError(error, errorContext);
      throw error;
    });
  }, [handleError]);

  return {
    
    handleError,
    handleNetworkError,
    handleValidationError,
    handleAuthError,
    handlePermissionError,
    handleNotFoundError,
    handleServerError,
    handleApiError,

    
    withErrorHandling,
    wrapPromise,

    
    addError,
    removeError,
    clearErrors
  };
};

export default useErrorHandler;
