Một Trung tâm nghiên cứu tuyệt mật (mà chúng ta không có quyền nói rõ tên ở đây) có $n$ phòng thí nghiệm đặt ngầm trong lòng đất. Các phòng thí nghiệm được đánh số từ $1$ đến $n\ (1 ≤ n ≤ 10^5)$. Giữa một số phòng có đường hầm nối với nhau, sao cho từ một phòng bất kỳ có thể đi đến phòng bất kỳ khác (có thể phải đi qua một số phòng nào đó). Độ dài mỗi đường hầm là như nhau và thời gian đi hết một đường hầm là $1$. Không có đường hầm nào nối một phòng với chính nó, nhưng có thể có nhiều đường hầm cùng nối $2$ phòng với nhau và tổng cộng trong Trung tâm có tất cả $m$ đường hầm $(1 ≤ m ≤ 10^5)$. Đường hầm cho phép đi lại theo cả hai chiều. Có $k$ phòng có lối thoát hiểm lên mặt đất $(1 ≤ k ≤ n)$. Trong trường hợp sơ tán khẩn cấp, tất cả các nhân viên phải tập trung ở những phòng có lối thoát hiểm.
<center><img src="/images/problems/565/EVA.svg" width="500px" /></center>

**Yêu cầu:** Hãy xác định thời gian tối thiểu để nhân viên mỗi phòng tập trung về phòng có lối thoát hiểm trong trường hợp phải sơ tán khẩn cấp.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $n$ và $k$;
- Dòng thứ hai chứa $k$ số nguyên khác nhau cho biết các phòng có cửa thoát hiểm;
- Dòng thứ ba chứa số nguyên $m$;
- Mỗi dòng trong $m$ dòng tiếp theo chứa hai số nguyên xác định cặp phòng có đường hầm nối trực tiếp.

## Dữ liệu ra:
- Một dòng chứa $n$ số nguyên, số thứ $i$ xác định thời gian tối thiểu để nhân viên phòng $i$ đi được tới phòng có lối thoát hiểm.

## Ví dụ:
### Dữ liệu vào:
```
10
2
10 8
9
6 7
7 5
5 8
8 1
1 10
10 3
3 4
4 9
9 2
```

### Dữ liệu ra:
```
1 4 1 2 1 3 2 0 3 0
```