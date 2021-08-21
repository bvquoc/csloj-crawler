Một hôm giáo sư `Y` đi thăm các mảnh vườn của mình và trở về cũng trên chính con đường đó theo chiều ngược lại, khi về đến nhà, giáo sư thấy mình như bị u mê bởi vì dường như lúc đi và lúc về mình đi trên cùng một con đường theo cùng một chiều, một lúc lâu sau giáo sư mới tỉnh ngộ, thì ra mình đã đi trên **con đường Palindrom**.

Giáo sư có $n$ mảnh vườn được đánh số từ $1$ đến $n$ và có $n - 1$ đoạn đường hai chiều, mỗi đoạn đường nối giữa hai mảnh vườn, hệ thống đường này đảm bảo có thể đi lại giữa hai mảnh vườn bất kỳ.

Vì rất yêu quý các mảnh vườn nên giáo sư đã đặt tên cho các mảnh vườn của mình. Giáo sư chọn ra $26$ cái tên mỹ miều khác nhau để đặt cho các mảnh vườn, mỗi tên được đại diện bởi một chữ cái latin in thường (từ `a` đến `z`). Khi đi từ mảnh vườn $u$ đến mảnh vườn $v$ có thể phải đi qua một số mảnh vườn trung gian (mỗi đoạn đường đi qua không quá một lần). Nếu ta lấy các chữ cái đại diện cho tên các mảnh vườn đi qua (tính cả mảnh vườn $u$ và $v$) ghep lại theo đúng thứ tự ta sẽ được một xâu ký tự. Ta nói con đường đó là **con đường Palindrom** nếu xâu ký tự đó đọc theo thứ tự xuôi và ngược đều giống nhau (là xâu Palindrom).

Giáo sư rất muồn biết trong hệ thống vườn và đường của mình, con đường Palindrom dài nhất là đi qua bao nhiêu mảnh vườn? Giáo sư lại phải nhờ đến các bạn giúp đỡ.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n\ (n \le 50000)$ là số mảnh vườn của giáo sư;
- Dòng thứ hai chứa một xâu ký tự độ dài $n$ chỉ gồm các chữ cái latin in thường, chữ cái thứ $i$ là đại diện cho tên của mảnh vườn thứ $i$;
- Mỗi dòng trong $n - 1$ dòng tiếp theo chứa hai số nguyên $A, B  (1\le A, B\le n, A ≠ B)$ cho biết có đoạn đường nối trực tiếp giữa hai mảnh vườn $A$ và $B$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số mảnh vườn nằm trên con đường Palindrom dài nhất.

## Giới hạn:
- **Subtask** $\#1$: $15\%$ số điểm có $n \le 3000$;
- **Subtask** $\#2$: $25\%$ số điểm có đoạn đường thứ $i$ nối giữa hai mảnh vườn thứ $i$ và $i + 1$, $∀1\le i < n$;
- **Subtask** $\#3$: $30\%$ số điểm có không quá $100$ mảnh vườn là chỉ có duy nhất một đoạn đường nối trực tiếp với một mảnh vườn khác;
- **Subtask** $\#3$: $30\%$ số điểm không có ràng buộc gì thêm.

## Ví dụ (Tải test đề bài và 2 test mẫu khác ở "Tệp đính kèm" phía trên đề bài):
#### Dữ liệu vào:
```
8
acdbabcd
1 6
6 7
6 3
3 4
4 5
5 2
8 5
```

#### Dữ liệu ra:
```
5
```

#### Giải thích:
<center><img src="/images/problems/1504/palinpath.svg" width=400px></center>

**<center>Hình minh họa cho test ví dụ</center>**

- Con đường Palindrom là $1 - 6 - 3 - 4-  5$ với chuỗi tên gọi các mảnh vườn tương ứng là `abdba`