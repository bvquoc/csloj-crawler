**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XIV (PHÚ THỌ 2018)</center>**
<br>

Trong thời đại Cách mạng khoa học kỹ thuật ~4.0~ mọi học sinh đều rất ngại tính toán. Một phép tính đơn giản như ~11×12 = 132~ cũng phải dùng Casio. Ở buổi học cuối cùng trong năm học cô giáo cho bài tập về nhà làm trong hè. Với mỗi bài tập cô đưa ra một dãy ~k~ số nguyên dương ~x_1,x_2,…,x_k~ và yêu cầu từ ~k~ số này chọn một số làm số ~a~, xóa số đó khỏi dãy, trong các số còn lại – chọn một số làm số ~b~, xóa số được chọn khỏi dãy, trong các số còn lại – chọn một số làm số ~c~, xóa số được chọn khỏi dãy, cuối cùng chọn một số trong số còn lại làm số ~d~. Cô giáo yêu cầu chọn ~a,b,c~ và ~d~ sao cho  ~\frac{a}{b}≤\frac{c}{d}~  và  ~\frac{a}{b}+\frac{c}{d}~ là nhỏ nhất.

**Lưu ý**: ~\frac{a}{b} , \frac{c}{d}~ là phân số và có thể cho kết quả thực, ví dụ ~3/4  = 0.75~.
Cô đã in và đưa cho lớp trưởng ~n~ bộ số như vậy, với mỗi bộ ~k~ số, hãy chỉ ra các số ~a,b,c,d~ được chọn.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~n,k\ (n≤10^3,4≤ k≤50)~;
- Mỗi dòng trong ~n~ dòng sau chứa ~k~ số nguyên dương có giá trị không vượt quá ~10^6~. 
Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Với mỗi bộ số đã cho, đưa ra trên một dòng các số ~a,b,c~ và ~d~ được chọn, các số đưa ra cách nhau một dấu cách.

## Ví dụ: 
#### Dữ liệu vào:
```
2 6
9 2 7 6 8 3
6 6 6 6 6 6
```

#### Dữ liệu ra:
```
2 8 3 9
6 6 6 6
```

## Giới hạn:
- Có ~20\%~ số test ứng với ~20\%~ số điểm có ~n=1, k=4~, các số có giá trị ~\le 10~;
- Có ~20\%~ số test khác ứng với ~20\%~ số điểm có ~n\le 10, k\le 6~, các số có giá trị ~\le 10^3~;
- Có ~20\%~ số test khác ứng với ~20\%~ số điểm có ~n\le 100, k\le 20~, các số có giá trị ~\le 10^6~;
- Có ~20\%~ số test khác ứng với ~20\%~ số điểm có ~n\le 1000, k\le 20~, các số có giá trị ~\le 10^6~;
- Có ~20\%~ số test còn lại ứng với ~20\%~ số điểm có ~n\le 1000, k\le 50~, các số có giá trị ~\le 10^6~.