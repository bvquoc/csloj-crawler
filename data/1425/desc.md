<!--**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**-->

Bản đồ một khu du lịch gồm $𝑛$ địa điểm và $𝑚$ đường đi hai chiều. Giữa hai địa điểm có thể có nhiều đường đi nối trực tiếp giữa chúng. Một khách du lịch lữ hành muốn đi bộ từ địa điểm $1$ tới địa điểm $𝑛$ rồi quay trở lại địa điểm $1$ bằng một hành trình thỏa mãn các yêu cầu sau:
- Chỉ đi trên các đường đi trong $𝑚$ đường đã cho;
- Không có đường đi nào qua nhiều hơn một lần trong hành trình;
- Độ dài hành trình (tính bằng tổng độ dài các đường đi trên hành trình) là nhỏ nhất có thể.

Hãy chỉ ra một hành trình thỏa mãn các yêu cầu trên hoặc cho biết rằng yêu cầu của du khách là không thể thực hiện được
 
## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $𝑛, 𝑚 ≤ 10^5\ (𝑛 ≥ 2)$;
- $𝑚$ dòng tiếp theo, dòng thứ $𝑖$ chứa ba số nguyên dương $𝑢_𝑖, 𝑣_𝑖, 𝑤_𝑖$ tương ứng với một đường đi nối địa điểm $𝑢_𝑖$ với địa điểm $𝑣_𝑖$ và độ dài đường đi đó là $𝑤_𝑖$. Độ dài đường đi được đo bằng micro mét $(μm)$, không có đường đi nào dài hơn $2km$.

## Dữ liệu ra:
- Dòng đầu ghi độ dài hành trình, trong trường hợp không tồn tại hành trình thỏa mãn các yêu cầu đặt ra thì dòng này ghi số $-1$.
- Nếu tồn tại hành trình, dòng thứ hai ghi các địa điểm theo đúng thứ tự trên hành trình tìm được, bắt đầu  và kết thúc ở địa điểm $1$.

## Ví dụ:
<center><img src="/images/problems/1425/WALK.svg" width="500px" /></center>

#### Dữ liệu vào:
```
5 7
1 2 3
1 4 8
2 3 5
2 4 4
3 5 5
4 3 8
4 5 3
```

#### Dữ liệu ra:
```
24
1 2 3 5 4 1
```