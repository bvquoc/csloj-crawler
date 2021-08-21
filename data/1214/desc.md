**<center>Nguồn: Ôn HN tháng 11/2017, Thầy Lê Minh Hoàng, Ngày 1</center>**

Một mê cung gồm $𝑛$ địa điểm đánh số từ $1$ tới $𝑛$ và $𝑚$ con đường đánh số từ $1$ tới $𝑚$. Con đường thứ $𝑖$ cho phép đi từ địa điểm $𝑢_𝑖$ tới địa điểm $𝑣_𝑖$ theo một chiều, độ dài con đường là $𝑤_𝑖$. Ban đầu cả $𝑛$ địa điểm đều bị khóa. Khi một địa điểm bị khóa, nó sẽ không cho phép đi ra hay đi vào theo bất cứ con đường nào liên thuộc với nó. Ngược lại khi một địa điểm được mở khóa, người ta có thể thoái mái ra vào nó bằng bất kỳ con đường nào (tất nhiên vẫn phải đi theo chiều đã định của các con đường, không được đi ngược chiều).

Giáo sư $X$ được một nhà thám hiểm $Y$ nhờ dùng máy tính mở khóa để thám hiểm mê cung. Hai người trao đổi qua các thông điệp thuộc một trong hai dạng:
- Giáo sư $X$: Địa điểm $𝑖$ vừa được mở khóa;
- Nhà thám hiểm $Y$: Bây giờ có thể đi từ $𝑠$ tới $𝑡$ hay không? Nếu đi được thì độ dài con đường ngắn nhất là bao nhiêu?

**Yêu cầu:** Biết được $𝑘$ thông điệp và trình tự của chúng, hãy giúp giáo sư $X$ trả lời tất cả câu hỏi của nhà thám hiểm $𝑌$.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương $𝑛 ≤ 300, 𝑚, 𝑘 ≤ 10^5$;
- $𝑚$ dòng tiếp theo, dòng thứ $𝑖$ chứa ba số nguyên dương $𝑢_𝑖, 𝑣_𝑖, 𝑤_𝑖\ (∀𝑖: 𝑤_𝑖 ≤ 10^6)$;
- $𝑘$ dòng tiếp theo, mỗi dòng chứa một thông điệp, đầu dòng là ký tự $∈ {𝑋, 𝑌}$ cho biết đó là thông điệp của giáo 
sư $X$ hay nhà thám điểm $𝑌$. Nếu là thông điệp của giáo sư $X$, tiếp theo là số nguyên $𝑖$ cho biết địa điểm $𝑖$ vừa được mở khóa. Nếu là thông điệp của nhà thám hiểm $𝑌$, tiếp theo là hai số nguyên $𝑠, 𝑡$ ứng với câu hỏi hiện giờ có thể đi từ $𝑠$ tới $𝑡$ hay không?

## Dữ liệu ra:
- Với mỗi câu hỏi của nhà thám hiểm $𝑌$, ghi ra trên một dòng độ dài đường đi ngắn nhất từ $𝑠$ tới $𝑡$ (nếu hiện tại chưa thể đi từ $𝑠$ tới $𝑡$, in ra trên dòng số $-1$).

## Ví dụ:
<center><img src="/images/problems/1214/DWLABYR.svg" width="300px" /></center>

#### Dữ liệu vào:
```
5 5 7
1 2 10
3 1 20
2 4 30
2 5 40
3 2 50
X 1
X 4
X 2
Y 1 4
X 3
Y 3 4
Y 5 3
```

#### Dữ liệu ra:
```
40
60
-1
```