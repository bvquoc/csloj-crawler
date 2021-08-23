**<center>NGUỒN: VOI 2019 - 2020</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Sau nhiều ngày quan sát các ngôi sao trên bầu trời, Alice nhận thấy có $n$ chòm sao. Mỗi chòm sao bao gồm một số lượng chẵn các ngôi sao có quy luật vận động giống nhau. Để thuận lợi cho việc theo dõi và khảo sát, Alice đánh số các chòm sao từ $1$ đến $n$. Trong mỗi chòm sao đó, các ngôi sao được đánh thứ tự từ $1$ cho đến số lượng ngôi sao có trong chòm sao. Alice xem xét các ngôi sao trên một hệ trục tọa độ Đề-các, trong đó ngôi sao thứ $i$ trong chòm sao thứ $s$ có tọa độ nguyên $(x_i^s, y_i^s)$. Sau khi phân tích về mặt hình học, Alice phát hiện ra các đặc tính sau:
- Trong mỗi chòm sao có duy nhất một ngôi sao không di chuyển, ngôi sao này được đánh số thứ tự $1$ trong chòm sao đó. Tất cả các ngôi sao còn lại, sau mỗi ngày, mỗi ngôi sao sẽ di chuyển đến một vị trí mới bằng cách thực hiện cùng một góc quay khi lấy ngôi sao được đánh số thứ tự $1$ làm tâm. Góc quay của mỗi chòm sao là một trong $3$ loại $90°$, $180°$, $270°$ theo chiều kim đồng hồ;
- Tại bất kỳ ngày nào, luôn tồn tại cách vẽ, nối vị trí của tất cả các ngôi sao của mỗi chòm sao thành một ***đa giác chuẩn không tự cắt***, có số đỉnh bằng số ngôi sao trong chòm sao và các đỉnh của đa giác là vị trí của các ngôi sao. Đa giác chuẩn không tự cắt là đa giác có các cạnh song song với trục tọa độ, không có $3$ đỉnh nào liên tiếp thẳng hàng và không có $2$ cạnh không liên tiếp nào của đa giác có điểm chung.

Để khảo sát độ phân tán của các chòm sao, sau mỗi ngày, với vị trí mới của các ngôi sao trong mỗi chòm sao, Alice sẽ vẽ một đa giác chuẩn không tự cắt cho từng chòm sao để diện tích được phủ bởi tất cả $n$ đa giác trên hệ trục tọa độ là lớn nhất.
<center><img src="/images/problems/1520/stars1.png" width=1000px></center>

**Yêu cầu:** Cho tọa độ các ngôi sao của mỗi chòm sao tại ngày đâu tiên (ngày $0$) mà Alice tiến hành quan sát cùng với quy luật quay của từng chòm sao. Hãy tính diện tích phủ lớn nhất bởi $n$ đa giác được vẽ ở ngày thứ $d$.

## Dữ liệu vào:
- Dòng đâu tiên chứa số nguyên dương $n$ và số tự nhiên $d$;
- Tiếp theo là $n$ nhóm dòng, mỗi nhóm mô tả về một chòm sao. Nhóm dòng thứ $s$ $(1≤ s ≤ n)$ có khuôn dạng như sau:
    - Dòng đầu chứa hai số $g_s$, và $r_s$, trong đó $g_s$ là số ngôi sao trong chòm sao ($g_s$ là số chẵn thỏa mãn $4 ≤ g_s ≤ 100$) và $r_s$ là giá trị góc quay (một trong $3$ loại giá trị $90°$, $180°$, $270°$;
    - Dòng thứ $i$ trong $g_s$ dòng tiếp theo chứa hai số nguyên $x_i^s, y_i^s\ (|x_i^s|, |y_i^s| \le 10^6)$. Các ngôi sao trong cùng một chòm sao có tọa độ phân biệt.

Các số trên cùng một dòng cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là diện tích phủ lớn nhất bởi $n$ đa giác chuẩn được vẽ ở ngày thứ $d$.

## Giới hạn:
- Có $25\%$ số test ứng với $25\%$ số điểm của bài thỏa mãn điều kiện: $n ≤ 1000, d = 0$ và các $g_s$ đều có giá trị bằng $4$;
- $25\%$ số test khác ứng với $25\%$ số điểm của bài thỏa mãn điều kiện: $n ≤ 1000, d ≤ 10^6$ và các $g_s$ đều có giá trị bằng $4$;
- $25\%$ số test khác ứng với $25\%$ số điểm của bài thỏa mãn điều kiện: $n = 2, d≤ 10^6$;
- $25\%$ số test còn lại ứng với $25\%$ số điểm của bài thỏa mãn điều kiện: $n ≤ 1000, d ≤ 10^6$.

## Ví dụ:
<center><img src="/images/problems/1520/stars2.png" width=600px></center>

### Dữ liệu vào:
```
2 1
4 270
4 4
1 4
1 1
4 1
4 90
5 5
9 5
5 9
9 9
```

### Dữ liệu ra:
```
19
```