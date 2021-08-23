Trò chơi bắn bi trên một bảng vuông $N$ dòng, $N$ cột được thực hiện như sau: Các viên bi được bắn từ mép trái phía bên ngoài bảng theo những dòng nào đấy. Tại những vị trí giao của dòng và cột của bảng có thể đặt một số vật cản. Các vật cản có hai trạng thái $1$ và $2$. Nếu không gặp vật cản, bi sẽ chuyển động không đổi hướng, nếu gặp vật cản trạng thái $1$, bi sẽ rẽ trái (vuông góc) với hướng đang chuyển động và làm vật cản chuyển sang trạng thái $2$, còn nếu gặp vật cản trạng thái $2$, bi sẽ rẽ phải (vuông góc) với hướng chuyển động và làm vật cản chuyển sang trạng thái $1$. Viên bi sẽ ra khỏi bảng tại một vị trí nào đấy thuộc một trong bốn mép của bảng. Một mục tiêu làm đích được đặt ở ngoài bảng phía mép phải, tại một vị trí thẳng hàng với một dòng nào đấy của bảng. Yêu cầu của trò chơi là phải hạ được mục tiêu bằng cách bắn lần lượt một số ít nhất viên bi (viên bi trước phải ra khỏi bảng mới được bắn viên bi tiếp), những viên bi đầu (nếu cần phải có) dùng để thay đổi trạng thái của bảng và viên bi cuối cùng dùng để bắn trúng đích.

## Dữ liệu vào:
- Dòng đầu tiên ghi giá trị $N\ (1≤N≤30)$;
- $N$ dòng tiếp theo ghi lần lượt các dòng của bảng, mỗi dòng gồm $N$ giá trị thuộc tập hợp $\{0,1,2\}$ ghi cách nhau ít nhất một dấu cách, trong đó $0$ là vị trí không có vật cản, $1$ và $2$ là vị trí có vật cản với trạng thái tương ứng;
- Dòng cuối cùng ghi chỉ số dòng của bảng mà thẳng hàng với nó là vị trí đặt mục tiêu. Các dòng của bảng được đánh số từ $1$ đến $N$ theo chiều từ trên xuống dưới và các cột của bảng được đánh số từ $1$ đến $N$ theo chiều từ trái sang phải.

## Dữ liệu ra:
- Dòng đầu tiên ghi $M$ là số viên bi cần bắn (qui ước $M=0$ nếu không có cách nào hạ được mục tiêu).
- Nếu $M>0$ thì dòng tiếp theo ghi $M$ số (cách nhau ít nhất một dấu trắng) lần lượt là chỉ số dòng tại đó các viên bi được bắn (Giới hạn số các vật cản không quá 15).

## Ví dụ:
### Dữ liệu vào:
```
4
0 0 0 2
0 2 1 0
0 1 1 0
0 0 0 1
2
```

### Dữ liệu ra:
```
4
3 2 3 2
```