import './header.scss';

function Slide1() {
  return (
    <div className="slide slide-1">
      <div className="slide__title">
        <h3>¿Cuál es la clave para que tus mezclas Flexi queden bien hechas?</h3>
      </div>
      <div className="slide__form">
        <div className="slide__form-title">
          <p>Selecciona tu respuesta para continuar.</p>
        </div>
        <div className="slide__form-wrappet-inputs">
          <label class="form__radio">
            <input data-slide="3" type="radio" id="slide1-cb-a" name="p1"class="form__radio_input" value="A" /><span> A) Que el agua esté helada</span>
          </label><br/>
          <label class="form__radio">
            <input data-slide="3" type="radio" id="slide1-cb-b" name="p1"class="form__radio_input" value="B" /><span> B) No contienen GMS (Glutamato monosódico)</span>
          </label><br/>
          <label class="form__radio">
            <input data-slide="3" type="radio" id="slide1-cb-c" name="p1"class="form__radio_input" value="C" /><span> C) No contienen sabores artificiales</span>
          </label><br/>
          <label class="form__radio">
            <input data-slide="3" type="radio" id="slide1-cb-d" name="p1"class="form__radio_input" value="D" /><span> D) Todas las anteriores</span>
          </label><br/>
        </div>
      </div>
      <div className="slide__img"></div>
    </div>
  );
}

export default Slide1;
