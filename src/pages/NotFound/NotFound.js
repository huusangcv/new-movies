import SimpleSlider from '~/components/SimpleSlider/SimpleSlider';

const NotFound = () => {
  return (
    <div>
      <h3 className="section-header">Phim tương tự</h3>
      <div className="related-titles">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default NotFound;
