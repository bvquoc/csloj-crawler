**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XIII (TUYÊN QUANG 2017)</center>**
<br>

Nhân dịp Trại hè Hùng Vương năm nay tổ chức tại tỉnh Tuyên Quang, được biết ở huyện Hàm Yên có loại cam sành rất nổi tiếng nên các đoàn cùng nhau đến thăm nông trang trồng cam sành của gia đình ông Nghiệp. Nông trang trồng cam nhà ông được trồng trên núi cao, khí hậu mát mẻ và được tưới bằng nước nguồn từ đỉnh núi nên cam có vị ngọt mát và giá trị dinh dưỡng cao.

<center><img src="/images/problems/805/orange.jpg", width=400px></center>

Trong các đoàn đến tham quan có ~N~ người muốn mua cam. Do mọi người muốn nhường nhau nên mỗi người chỉ mua một quả, người thứ ~i~ cho biết sẵn sàng trả ~p_i~ (đồng) cho một quả cam.
Ông Nghiệp quyết định lựa chọn đưa ra một mức giá cố định là ~k~ (đồng) cho mỗi quả cam trong vườn. Vì rất thích tính cách hào phóng của khách nên ông sẽ bán với giá ~k~ cho tất cả những người sẵn sàng trả giá lớn hơn ~k~. Ngoài ra, nếu có những người trả giá đúng bằng ~k~, ông chỉ bán duy nhất cho một người khách đến sớm nhất.
Tuy hiếu khách nhưng vì miếng cơm manh áo nên ông Nghiệp vẫn muốn thu được số tiền nhiều nhất có thế. Hãy giúp ông Nghiệp lựa chọn mức giá là một số nguyên ~k~ để có thể thu được nhiều tiền nhất từ việc bán cam cho ~N~ vị khách nói trên. Biết số cam trong vườn đảm bảo đủ cho tất cả khách tới thăm.
## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~N~ là số lượng khách muốn mua cam;
- Dòng sau ghi ~N~ số nguyên dương ~p_1,p_2,…,p_N\ \left(p_i≤10^6\right)~ mỗi số cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số tiền nhiều nhất mà ông Nghiệp có thể thu được.

## Ví dụ:
#### Dữ liệu vào:
```
4
1   2   5  4

```

#### Dữ liệu ra:
```
8
```

## Ràng buộc:
- Có ~30\%~ số test ứng với ~30\%~ số điểm của bài có ~N,p_i≤1000,p_i≠p_j  ∀i≠j~;
- Có ~30\%~ số test khác  ứng với ~30\%~ số điểm của bài có ~N≤1000,p_i≠p_j  ∀i≠j~;
- Có ~20\%~ số test khác ứng với ~20\%~ số điểm của bài có ~N≤10^5,p_i≠p_j  ∀i≠j~;
- Có ~20\%~ số test còn lại ứng với ~20\%~ số điểm của bài có ~N≤10^5~.