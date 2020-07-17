from django.db import models
import sys
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile

# Create your models here.
class Skill(models.Model):
    name = models.CharField(max_length=70)
    image = models.ImageField(upload_to="images/")

    def save(self, *args, **kwargs):
        if not self.id:
            self.image = self.compressImage(self.image)
        super(Skill, self).save(*args, **kwargs)

    def compressImage(self, image):
        imageTemproary = Image.open(image)
        outputIoStream = BytesIO()
        imageTemproary.save(outputIoStream, format="JPEG", quality=60)
        outputIoStream.seek(0)
        image = InMemoryUploadedFile(outputIoStream, "ImageField", "%s.jpg" % image.name.split(".")[0], "image/jpeg", sys.getsizeof(outputIoStream), None,)
        return image

    def __str__(self):
        return self.name