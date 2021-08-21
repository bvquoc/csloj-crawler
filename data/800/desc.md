**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XII (BẮC GIANG 2016)</center>**
<br>

Nhân dịp đến quê hương Bắc Giang tham gia thi chọn học sinh giỏi Trại hè Hùng Vương, Hà đến thăm trang trại trồng vải thiều của bác Thuấn. Trang trại gồm ~n~ cây thẳng hàng và cách đều nhau (khoảng cách từ gốc cây ~i~ đến gốc cây ~i+1~ là ~3~ mét với mọi ~i=1,2,…,n-1~).
Năm nay là năm được mùa nên cây nào cũng sai quả, cây thứ ~i~ có số lượng quả vải là ~a_i~ quả. Bác Thuấn rất lo lắng vì tuổi già rồi làm sao có thể hái được hết số vải thiều này, Hà đang nghĩ cách giúp bác Thuấn thì đột nhiên có một ông tiên hiện ra trước mắt Hà và nói: “Ta cho cháu một chiếc túi thần, cháu hãy chọn một chỗ đứng ở một gốc cây trong ~n~ cây rồi hô to câu thần chú [Vải ơi chui vào đây], khi đó tất cả quả ở các cây có khoảng cách tính từ gốc đến chỗ cháu đứng không vượt quá ~H~ sẽ từ từ rời khỏi cành và bay vào túi thần này.”

**Yêu cầu**: Hãy cho biết Hà có thể thu hoạch giúp bác Thuấn được tối đa bao nhiêu quả vải nếu lời nói của ông tiên là hiện thực.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~n,H\ \left(n≤100; H≤10^9\right)~;
- Dòng thứ hai chứa ~n~ số nguyên  ~a_1,a_2,…,a_n~, trong đó ~a_i\  \left(a_i≤10^9; i=1,2,…,n\right)~  là số lượng quả của cây vải thứ ~i~.
Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách. 

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là tổng số lượng quả vải nhiều nhất mà Hà có thể thu hoạch giúp bác Thuấn.

## Ví dụ:
#### Dữ liệu vào:
```
5 3
1 2 2 2 1

```

#### Dữ liệu ra:
```
6
```

#### Giải thích:
- Ta đứng ở gốc cây số ~3~ sẽ thu được toàn bộ số quả vải ở các cây ~2, 3, 4~.