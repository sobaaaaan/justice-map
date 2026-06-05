  // 1. 初期ロード時に都道府県一覧を取得
  useEffect(() => {
    async function fetchPrefectures() {
      try {
        const { data, error } = await supabase
          .from("prefectures")
          .select("id, name")
          .order("id", { ascending: true });

        if (error) throw error;

        console.log("都道府県取得件数:", data?.length);
        setPrefectures(data ?? []);
      } catch (err) {
        console.error("都道府県データの取得に失敗しました:", err);
        setErrorMessage("都道府県マスターの読み込みに失敗しました。ページを再読み込みしてください。");
        setSubmitStatus("error");
      }
    }

    fetchPrefectures();
  }, []);

  // 2. 都道府県(prefecture_id)が変更されたら、紐づく市区町村一覧を取得
  useEffect(() => {
    if (!form.prefecture_id) {
      setCities([]);
      return;
    }

    async function fetchCities() {
      try {
        const { data, error } = await supabase
          .from("cities")
          .select("id, prefecture_id, name, center_lat, center_lng")
          .eq("prefecture_id", Number(form.prefecture_id))
          .order("id", { ascending: true });

        if (error) throw error;
        setCities(data ?? []);
      } catch (err) {
        console.error("市区町村データの取得に失敗しました:", err);
        setErrorMessage("市区町村マスターの読み込みに失敗しました。");
        setSubmitStatus("error");
      }
    }

    fetchCities();
  }, [form.prefecture_id]);
