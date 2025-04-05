import os
from flask import Flask
from flask_login import LoginManager
from .config import Config

def create_app(config_class=Config):
    
    app = Flask(__name__)
    
    app.config.from_object(config_class)

    # Registrar blueprints de rutas
    from .routes import main
    app.register_blueprint(main)

    return app