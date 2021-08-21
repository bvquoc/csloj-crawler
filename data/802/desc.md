**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XII (BẮC GIANG 2016)</center>**
<br>

Giáo sư Thuấn có nhiều công trình nghiên cứu khoa học nổi tiếng. Một trong các công trình gây nhiều tiếng vang nhất là công trình “Phân tích tiếng cười”. Trong nghiên cứu này, giáo sư đã phân tích tiếng nói của con người và từ đó trích ra tiếng cười. Giáo sư đã phát triển các phần mềm cho phép chuyển đổi tiếng nói của con người thành văn bản. Giáo sư xét chuỗi tiếng cười là một xâu gồm các chữ cái $“a”, “b”, “c”, “h”$, và phải được ghép được từ một trong các xâu thuộc tập xâu $p_1,p_2,…,p_n$, trong đó các xâu $p_1,p_2,…,p_n$ là các xâu mô tả tiếng cười đã được giáo sư xây dựng. Ví dụ, nếu tập xâu mô tả tiếng cười là $“ha”$ và $“a”$, thì xâu $“ahahaha”$ và $“a”$ là tiếng cười, còn $“abacaba”$ và $“hh”$ không phải.

Bạn được cho một xâu $s$ là xâu được chuyển đổi từ tiếng nói và tập các xâu $p_1,p_2,…,p_n$. Tìm độ dài của xâu con dài nhất (liên tiếp) của xâu $s$ có thể được xét như là chuỗi tiếng cười.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên $n$;
- Dòng thứ hai chứa xâu $s$;
- $n$ dòng tiếp theo, dòng thứ $i$ chứa xâu $p_i\ \left(i=1,2,…,n\right)$, các xâu có độ dài không vượt quá $30$.
Các xâu chỉ gồm các chữ cái `$“a”, “b”, “c”, “h”$. 

## Dữ liệu ra:
- Ghi ra một số nguyên là độ dài của xâu con dài nhất có thể được xét như là chuỗi tiếng cười.

## Ví dụ:
#### Dữ liệu vào:
```
2
ahahhahaah
a
ha
```

#### Dữ liệu ra:
```
5
```

## Ràng buộc:
- Có $20\%$ số test ứng với $20\%$ số điểm của bài có $n=1$ và độ dài xâu $s$ không vượt quá $100$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm của bài có $n=1$ và độ dài xâu $s$ không vượt quá $10^5$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm của bài có $n=2$ và độ dài xâu $s$ không vượt quá $30$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm của bài có $n≤100$ và độ dài xâu $s$ không vượt quá $100$;
- Có $20\%$ số test còn lại ứng với $20\%$ số điểm còn lại của bài có $n≤1000$ và độ dài xâu $s$ không vượt quá $10^5$.