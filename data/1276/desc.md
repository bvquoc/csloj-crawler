Quốc vương đang trên đường trở về vương quốc của mình. Quãng đường cuối cùng phải vượt qua của ngài là một khu biển gồm $N$ hòn đào đánh số từ $1$ tới $N$, ngài đang ở hòn đảo thứ nhất và đích đến là hòn đảo $N$. Có một số tuyến phà nối giữa các hòn đảo, tuyến phà thứ $i$ đi từ hòn đảo $A_i$ tới hòn đảo $B_i$ với chi phí là $C_i$. Quốc vương muốn về nhà với chi phí ít nhất có thể.

Thật không may cho quốc vương, tên chủ ở khu này đã lên kế hoạch để thay đổi đích đến của một số tuyến phà bắt đầu cùng một vị trí. Ví dụ từ đảo $1$ có $3$ tuyến phà tới đảo $2, 3, 4$ với chi phí lần lượt là $10, 20, 30$, hắn ta có thể cho đảo vị trí của các tuyến phà này, ví dụ khi hắn đổi chỗ $2$ tuyến phà đầu tiên thì chi phí của $3$ tuyến phà này sẽ lần lượt là $20, 10, 30$.

Quốc vương không biết tên chủ tham lam này sẽ đổi các chuyến phà như thế nào, nhưng ngài vẫn luôn lựa chọn minh mẫn để có thể đi được con đường có chi phí nhỏ nhất. Hãy giúp ngài tính số tiền tối thiểu mà ngài cần chi ra, để đảm bảo rằng số tiền này sẽ đủ cho ngài di chuyển về tới đích trong mọi trường hợp tồi tệ nhất. 

## Dữ liệu vào:
- Dòng đầu tiên là hai số nguyên $N, M$ thể hiện số đảo và số chuyến phà $(N ≤10^5,M≤3×10^5)$;
- $M$ dòng sau mỗi dòng bai số nguyên dương $A_i, B_i, C_i$ biểu diễn thông số cho chuyến phà thứ $i$.

## Dữ liệu ra:
- Số nguyên duy nhất là kết quả của bài toán. 

## Ví dụ:
### Dữ liệu vào:
```
4 5
1 2 2
2 4 2
1 3 10
3 4 7
1 4 7
```

### Dữ liệu ra:
```
9
```

### Giới hạn:
- $7$ test có $M = 2 × N – 4$, trong đó có $N – 2$ tuyến phà từ $1$ tới $2, 3, …, N – 1$ và $N – 2$ tuyến phà khác từ $2, 3, …, N – 1$ tới $N$;
- $10$ test có duy nhất đảo $1$ có thể có nhiều hơn $1$ chuyến phà;
- $11$ test trong các đảo không có chu trình;
- $12$ test còn lại không có ràng buộc nào cả.