import { Application } from "stimulus"
import SlideshowController from './SlideshowController';

const application = Application.start()
application.register("slideshow", SlideshowController);
